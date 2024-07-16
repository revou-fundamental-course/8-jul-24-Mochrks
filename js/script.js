function validateForm() {
  let isValid = true;

  // validasi Jenis kelamin
  const genderInputs = document.getElementsByName("gender");
  let genderSelected = false;
  for (const genderInput of genderInputs) {
    if (genderInput.checked) {
      genderSelected = true;
      break;
    }
  }
  const genderError = document.getElementById("genderError");
  if (!genderSelected) {
    genderError.textContent = "Pilih jenis kelamin.";
    genderError.style.display = "block";
    isValid = false;
  } else {
    genderError.style.display = "none";
  }

  // validasi berat badan
  const weightInput = document.getElementById("weight");
  const weightError = document.getElementById("weightError");
  if (!weightInput.value) {
    weightError.textContent = "Masukkan berat badan.";
    weightError.style.display = "block";
    isValid = false;
  } else {
    weightError.style.display = "none";
  }

  // umur validasi
  const ageInput = document.getElementById("age");
  const ageError = document.getElementById("ageError");
  if (!ageInput.value) {
    ageError.textContent = "Masukkan usia.";
    ageError.style.display = "block";
    isValid = false;
  } else {
    ageError.style.display = "none";
  }

  // tinggi badan validasi
  const heightInput = document.getElementById("height");
  const heightError = document.getElementById("heightError");
  if (!heightInput.value) {
    heightError.textContent = "Masukkan tinggi badan.";
    heightError.style.display = "block";
    isValid = false;
  } else {
    heightError.style.display = "none";
  }

  // is form CHeck valid
  if (isValid) {
    calculate();
  }
}

function calculate() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (weight && height) {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    document.getElementById("bmiValue").textContent = `${bmi}`;
    if (bmi < 18.5) {
      document.getElementById("bmiStatus").textContent =
        "Anda Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      document.getElementById("bmiStatus").textContent =
        "Berat badan anda Normal(ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
      document.getElementById("bmiStatus").textContent =
        "Anda memiliki berat badan berlebih ";
    } else {
      document.getElementById("bmiStatus").textContent =
        "Berat badan anda Obesitas";
    }
  }
}

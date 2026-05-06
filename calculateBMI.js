function bmi(weight, height) {
  let cal_bmi = weight/( height * height );
  
  if (cal_bmi <= 18.5){
    return "Underweight";
  }
  else if (cal_bmi <= 25.0 ){
    return "Normal";
  }
  else if (cal_bmi <= 30.0 ){
    return "Overweight";
  }
  else if (cal_bmi => 30){
    return "Obese";
  } else
  return "You are a child!";
}
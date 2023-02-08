function getValues() {
  let numWeeks = parseInt(document.getElementById("weeks").value);
  //let numWeeks;
  let sumOfDays = 0;
  console.log(typeof numWeeks);
  console.log(numWeeks);
  let dayValue = parseInt(document.getElementById("days").value);

  //numWeeks = weekValue;
  if (isNaN(numWeeks)) {
    window.alert("Enter a valid number");
  }

  if (numWeeks < 0) {
    sumOfDays += numWeeks * 7;
    console.log("negative", sumOfDays);
  } else {
    sumOfDays += numWeeks * 7;
  }
  if (dayValue) {
    console.log("counting days");
    sumOfDays += parseInt(dayValue);
  }

  let finalLmp = LMP(sumOfDays);
  console.log(finalLmp);
  let finalEdd = EDD(finalLmp);
  console.log(finalEdd);
  let finalIVF = IVF(finalEdd);
  console.log(finalIVF);
  const edd = document.getElementById("EDD");
  edd.innerText = finalEdd;
  const ivf = document.getElementById("IVF");
  ivf.innerText = finalIVF;
  const lmp = document.getElementById("LMP");
  lmp.innerText = finalLmp;
  const sd = document.getElementById("SD");
  sd.innerText = StartDate(numWeeks);
  const ed = document.getElementById("ED");
  ed.innerText = EndDate(numWeeks);
  console.log(sumOfDays);
  /*console.log(dayValue);
  console.log(typeof weekValue);
  console.log(typeof dayValue);
  console.log(Date());
  let date = new Date();
  date.setDate(date.getDate() + 255);
  console.log(date.toLocaleDateString());*/
}

const LMP = (x) => {
  let date = new Date();
  console.log("lmp1", date);
  date.setDate(date.getDate() - x);
  console.log("lmp2", date);
  return date.toLocaleDateString();
};

const EDD = (x) => {
  let date = new Date(x);
  console.log("edd1", date);
  date.setDate(date.getDate() + 280);
  console.log("edd2", date);
  return date.toLocaleDateString();
};

const IVF = (x) => {
  let date = new Date(x);
  console.log("ivf1", date);
  date.setDate(date.getDate() - 266);
  console.log("ivf2", date);
  return date.toLocaleDateString();
};

const StartDate = (x) => {
  if (x == 4) {
    let date = new Date();
    date.setDate(date.getDate() + 20);
    return date.toLocaleDateString();
  } else if (x == 5) {
    let date = new Date();
    date.setDate(date.getDate() + 13);
    return date.toLocaleDateString();
  } else if (x == 6) {
    let date = new Date();
    date.setDate(date.getDate() + 6);
    return date.toLocaleDateString();
  } else if (x >= 7 || x <= 12) {
    let date = new Date();
    //date.setDate(date.getDate() + 6);
    return date.toLocaleDateString();
  } else if (x >= 13) {
    let date = new Date();
    //date.setDate(date.getDate() + 6);
    return date.toLocaleDateString();
  }
};

const EndDate = (x) => {
  if (x == 4) {
    let date = new Date();
    date.setDate(date.getDate() + 41);
    return date.toLocaleDateString();
  } else if (x == 5) {
    let date = new Date();
    date.setDate(date.getDate() + 34);
    return date.toLocaleDateString();
  } else if (x == 6) {
    let date = new Date();
    date.setDate(date.getDate() + 27);
    return date.toLocaleDateString();
  } else if (x >= 7 || x <= 12) {
    let date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toLocaleDateString();
  } else if (x >= 13) {
    let date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toLocaleDateString();
  }
};

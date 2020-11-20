function calculate() {
  const whiteJade = document.getElementById('white').value | 0;
  const agateJade = document.getElementById('agate').value | 0;
  const hetianJade = document.getElementById('hetian').value | 0;
  const blessing = document.getElementById('blessing').value | 0;

  const whiteJadeExp = 10 * whiteJade;
  const agateJadeExp = 50 * agateJade;
  const hetianJadeExp = 100 * hetianJade;
  const blessingExp = 125 * blessing;

  const totalJadePoints = whiteJadeExp + agateJadeExp + hetianJadeExp;
  const estimatedPoints = document.getElementById('estimated');
  const title = document.getElementById('title');
  
  if(blessingExp > 0){
    const realistic = 125 * blessing;
    const optimistic = 200 * blessing;

    title.innerText = '*Projected Intimacy Points'
    estimatedPoints.innerText = `${totalJadePoints + realistic} (realistic) - ${totalJadePoints + optimistic} (optimistic)`;
  } else {
    title.innerText = 'Total Intimacy Points'
    estimatedPoints.innerText = totalJadePoints;
  }
}


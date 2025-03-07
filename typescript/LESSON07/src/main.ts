//Index Signatures

interface TransactionOnbj {
  [index:string]:number
  Pizza:number,
  Books:number,
  Job:number
}

const todayTransactions: TransactionOnbj = {
  Pizza: -10,
  Books:-5,
  Job:50
}

console.log(todayTransactions.Pizza)

const todaysNet = (transactions:TransactionOnbj)=>{
  let total = 0
  for(const transction in transactions){
    total +=transactions[transction]
  }
  return total
}

console.log(todaysNet(todayTransactions))
import {
  AddEmployee as AddEmployeeEvent,
  DelEmployee as DelEmployeeEvent,
  Payment as PaymentEvent
} from "../generated/EmployeeManagement/EmployeeManagement"
import { AddEmployee, DelEmployee, Payment } from "../generated/schema"

export function handleAddEmployee(event: AddEmployeeEvent): void {
  let entity = new AddEmployee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.employeeAddress = event.params.employeeAddress
  entity.fName = event.params.fName
  entity.lName = event.params.lName
  entity.salary = event.params.salary
  entity.vestingPeriod = event.params.vestingPeriod
  entity.employeeAvatar = event.params.employeeAvatar
  entity.isVested = event.params.isVested
  entity.startTime = event.params.startTime
  entity.department = event.params.department

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDelEmployee(event: DelEmployeeEvent): void {
  let entity = new DelEmployee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.employeeAddress = event.params.employeeAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePayment(event: PaymentEvent): void {
  let entity = new Payment(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.employeeAddress = event.params.employeeAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddEmployee,
  DelEmployee,
  Payment
} from "../generated/EmployeeManagement/EmployeeManagement"

export function createAddEmployeeEvent(
  employeeAddress: Address,
  fName: string,
  lName: string,
  salary: BigInt,
  vestingPeriod: BigInt,
  employeeAvatar: string,
  isVested: boolean,
  startTime: BigInt,
  department: string
): AddEmployee {
  let addEmployeeEvent = changetype<AddEmployee>(newMockEvent())

  addEmployeeEvent.parameters = new Array()

  addEmployeeEvent.parameters.push(
    new ethereum.EventParam(
      "employeeAddress",
      ethereum.Value.fromAddress(employeeAddress)
    )
  )
  addEmployeeEvent.parameters.push(
    new ethereum.EventParam("fName", ethereum.Value.fromString(fName))
  )
  addEmployeeEvent.parameters.push(
    new ethereum.EventParam("lName", ethereum.Value.fromString(lName))
  )
  addEmployeeEvent.parameters.push(
    new ethereum.EventParam("salary", ethereum.Value.fromUnsignedBigInt(salary))
  )
  addEmployeeEvent.parameters.push(
    new ethereum.EventParam(
      "vestingPeriod",
      ethereum.Value.fromUnsignedBigInt(vestingPeriod)
    )
  )
  addEmployeeEvent.parameters.push(
    new ethereum.EventParam(
      "employeeAvatar",
      ethereum.Value.fromString(employeeAvatar)
    )
  )
  addEmployeeEvent.parameters.push(
    new ethereum.EventParam("isVested", ethereum.Value.fromBoolean(isVested))
  )
  addEmployeeEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  addEmployeeEvent.parameters.push(
    new ethereum.EventParam("department", ethereum.Value.fromString(department))
  )

  return addEmployeeEvent
}

export function createDelEmployeeEvent(employeeAddress: Address): DelEmployee {
  let delEmployeeEvent = changetype<DelEmployee>(newMockEvent())

  delEmployeeEvent.parameters = new Array()

  delEmployeeEvent.parameters.push(
    new ethereum.EventParam(
      "employeeAddress",
      ethereum.Value.fromAddress(employeeAddress)
    )
  )

  return delEmployeeEvent
}

export function createPaymentEvent(
  employeeAddress: Address,
  amount: BigInt
): Payment {
  let paymentEvent = changetype<Payment>(newMockEvent())

  paymentEvent.parameters = new Array()

  paymentEvent.parameters.push(
    new ethereum.EventParam(
      "employeeAddress",
      ethereum.Value.fromAddress(employeeAddress)
    )
  )
  paymentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return paymentEvent
}

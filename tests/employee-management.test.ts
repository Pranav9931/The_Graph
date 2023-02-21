import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AddEmployee } from "../generated/schema"
import { AddEmployee as AddEmployeeEvent } from "../generated/EmployeeManagement/EmployeeManagement"
import { handleAddEmployee } from "../src/employee-management"
import { createAddEmployeeEvent } from "./employee-management-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let employeeAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let fName = "Example string value"
    let lName = "Example string value"
    let salary = BigInt.fromI32(234)
    let vestingPeriod = BigInt.fromI32(234)
    let employeeAvatar = "Example string value"
    let isVested = "boolean Not implemented"
    let startTime = BigInt.fromI32(234)
    let department = "Example string value"
    let newAddEmployeeEvent = createAddEmployeeEvent(
      employeeAddress,
      fName,
      lName,
      salary,
      vestingPeriod,
      employeeAvatar,
      isVested,
      startTime,
      department
    )
    handleAddEmployee(newAddEmployeeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddEmployee created and stored", () => {
    assert.entityCount("AddEmployee", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddEmployee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "employeeAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddEmployee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fName",
      "Example string value"
    )
    assert.fieldEquals(
      "AddEmployee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "lName",
      "Example string value"
    )
    assert.fieldEquals(
      "AddEmployee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "salary",
      "234"
    )
    assert.fieldEquals(
      "AddEmployee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "vestingPeriod",
      "234"
    )
    assert.fieldEquals(
      "AddEmployee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "employeeAvatar",
      "Example string value"
    )
    assert.fieldEquals(
      "AddEmployee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isVested",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "AddEmployee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "startTime",
      "234"
    )
    assert.fieldEquals(
      "AddEmployee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "department",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

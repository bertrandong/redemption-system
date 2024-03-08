import { PrismaClient } from "@prisma/client";
import { search } from "./search";
import { addRedemption } from "./addRedemption";

const prisma = new PrismaClient()

async function main() {
  const readline = require('readline-sync')

  const staffPassId = readline.question("Please enter your staff pass ID: ").toUpperCase()
  
  const user = await search(staffPassId)

  if (user) {
    console.log("Staff info:")
    console.log(user)
    addRedemption(user.team_name, new Date())
  } else {
    console.log(`Staff pass ID '${staffPassId}' does not exist!`)
  }
}

main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
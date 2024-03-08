import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

let csvToJson = require('convert-csv-to-json');
let json = csvToJson.fieldDelimiter(',').getJsonFromCsv(process.env.CSV_PATH)

async function main() {
  for (let i = 0; i < json.length; i++){
    const user = await prisma.user.create({
      data: {
        staff_pass_id: json[i]["staff_pass_id"],
        team_name: json[i]["team_name"],
        created_at: new Date(parseInt(json[i]["created_at"])),
      }
    })
  }

  const teams = await prisma.user.findMany({
    distinct: ['team_name']
  })

  for (let i = 0; i < teams.length; i++) {
    const team = await prisma.redemption.create({
      data: {
        team_name: teams[i]["team_name"],
      }
    })
  }
}

main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
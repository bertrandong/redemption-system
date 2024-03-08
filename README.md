# Redemption System

Built with Node.js, Typescript, Prisma, Jest

## Installation

First, run the following command to install the relevant modules:
```
npm install
```

## Setting up .env file
In the .env file, create two variables named `DATABASE_URL` and `CSV_PATH`. Database server used here is PostgreSQL. Here, you can choose to which CSV file to load by editing `CSV_PATH`. It should look something like below:
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/test"
CSV_PATH="/Users/bertrand/Documents/file/public/staff-id-to-team-mapping-long.csv"
```

## Loading initial data

Run this command to create the schema,
```
npx prisma migrate dev --name init
```

followed by this to generate the Prisma client.
```
npx prisma generate
```

To load the data from the csv, run
```
cd prisma
ts-node seed.ts
```
You will be prompted to enter a staff pass ID. If an existing staff pass ID is entered, the program will check and verify if redemption is still available and add new redemption data accordingly.

You can view the database by running this command:
```
npx prisma studio
```

To reset the data, you can run this command:
```
npx prisma migrate reset
```

## Running the program
In the src directory, run
```
cd src
ts-node script.ts
```

## Running Jest unit tests
> Note: Test cases are created specifically for `staff-id-to-team-mapping.csv` and `staff-id-to-team-mapping-long.csv`. Edit accordingly when loading respective CSV files.
```
npm test
```

## Assumptions
1. Each team only can redeem the gifts once.
2. All staff pass IDs are unique.
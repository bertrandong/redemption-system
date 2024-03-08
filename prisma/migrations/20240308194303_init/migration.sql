/*
  Warnings:

  - The `redeemed_at` column on the `Redemption` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `created_at` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Redemption" DROP COLUMN "redeemed_at",
ADD COLUMN     "redeemed_at" BIGINT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "created_at",
ADD COLUMN     "created_at" BIGINT NOT NULL;

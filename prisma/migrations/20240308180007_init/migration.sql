-- CreateTable
CREATE TABLE "User" (
    "staff_pass_id" TEXT NOT NULL,
    "team_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("staff_pass_id")
);

-- CreateTable
CREATE TABLE "Redemption" (
    "team_name" TEXT NOT NULL,
    "redeemed_at" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "User_staff_pass_id_key" ON "User"("staff_pass_id");

-- CreateIndex
CREATE UNIQUE INDEX "Redemption_team_name_key" ON "Redemption"("team_name");

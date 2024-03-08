import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function verifyRedemption(teamName: string) {
  try {
    const lastRedemption = await prisma.redemption.findFirst({
      where: {
        team_name: teamName
      },
    });
    if (lastRedemption?.redeemed_at) {
      console.log(`Team not eligible for redemption, last redeemed on ${new Date(Number(lastRedemption.redeemed_at))}`);
      return false;
    }
    console.log("Team eligible for redemption");
    return true;
  } catch (error) {
    throw new Error(`Error verifying redemption: ${error}`);
  }
}

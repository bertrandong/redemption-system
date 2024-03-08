import { PrismaClient } from '@prisma/client';
import { verifyRedemption } from './verifyRedemption';

const prisma = new PrismaClient();

export async function addRedemption(teamName: string, redeemedAt: Date) {
  try {
    const isEligible = await verifyRedemption(teamName)

    if (isEligible) {
      const redemption = await prisma.redemption.update({
        where: {
          team_name: teamName
        },
        data: {
          redeemed_at: redeemedAt.valueOf(),
        },
      });
      console.log(`Successfully redeemed for team ${teamName} on ${new Date(Number(redemption.redeemed_at))}`)
    }
  } catch (error) {
    throw new Error(`Error adding redemption: ${error}`);
  }
}

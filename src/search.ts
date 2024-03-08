import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function search(staffPassId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        staff_pass_id: staffPassId
      }
    });
    
    if (user) {
      return user;
    }
    return;
  } catch (error) {
    throw new Error(`Error looking up staff pass ID: ${error}`);
  }
}

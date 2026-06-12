import { prisma } from "../lib/prisma";

async function main() {
  const count = await prisma.chatLog.count();
  console.log(`✅ Connected. ${count} chat log(s) found.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌", e);
    await prisma.$disconnect();
    process.exit(1);
  });

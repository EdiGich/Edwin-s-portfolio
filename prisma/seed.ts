import { prisma } from "../lib/prisma";

async function main() {
  const chatLog = await prisma.chatLog.create({
    data: {
      sessionId: "seed-init",
      userMessage: "Hello, this is a seed record.",
      category: "greeting",
    },
  });
  console.log("Seeded chat log:", chatLog.id);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

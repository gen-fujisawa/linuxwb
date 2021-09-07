import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();
/* istanbul ignore next */
if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;

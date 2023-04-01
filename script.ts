import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Saboor",
    //         email: "saboor@google.com",
    //         password: "123456",
    //         posts: {
    //             create: {
    //                 title: "Hello World",
    //                 content: "This is my first post",
    //             },
    //         },
    //     },
    // });

    // console.log(user)

    const users = await prisma.user.findMany({
        include: {
            posts: true,
        },
    });
    console.dir(users, { depth: null });
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

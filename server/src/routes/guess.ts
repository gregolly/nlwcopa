import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { authenticate } from "../plugins/authenticate"

export async function guessesRoutes(fastify: FastifyInstance) {
    fastify.get('/guesses/count', async () => {
        const count = await prisma.pool.count()
    
        return { count }
    })

    fastify.post('/polls/:poolId/games/:gameId/guesses', {
        onRequest: [authenticate]
    }, async (request, reply) => {
        const createGuessParams = z.object({
            poolId: z.string(),
            gameId: z.string(),
        })

        const createGuessBody = z.object({
            firstTeamPoints: z.number(),
            secondTeamPoints: z.number(),
        })

        const { poolId, gameId } = createGuessParams.parse(request.params)
        const { firstTeamPoints, secondTeamPoints} = createGuessBody.parse(request.body)

        const participant = await prisma.particiant.findUnique({
            where: {
                userId_poolId: {
                    poolId,
                    userId: request.user.sub,
                }
            }
        })

        if (!participant) {
            return reply.status(400).send({
                message: "Your not allowed to crate a guesss inside this poll."
            })
        }

        const guess = await prisma.guess.findUnique({
            where: {
                particiantId_gameId: {
                    particiantId: participant.id,
                    gameId
                }
            }
        })

        if (guess) {
            return reply.status(400).send({
                message: "Your already sent a guess to this game on this poll."
            })
        }

        const game = await prisma.game.findUnique({
            where: {
                id: gameId,
            }
        })

        if(!game) {
            return reply.status(400).send({
                message: "Game not found."
            })
        }

        if(game.date < new Date()) {
            return reply.status(400).send({
                message: "You cannot send guesses after the game date."
            })
        }

        await prisma.guess.create({
            data: {
                gameId,
                particiantId: participant.id,
                firstTeamPoints,
                secondTeamPoints,
            }
        })

        return reply.status(201).send()
    })
}
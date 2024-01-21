import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    isPublished: z.literal(true).optional(),
    isSoftDeleted: z.literal(true).optional(),
    isActive: z.literal(true).optional(),
    deactivationReason: z.literal(true).optional(),
    deactivationDate: z.literal(true).optional(),
    name: z.literal(true).optional(),
    code: z.literal(true).optional(),
    legacyCode: z.literal(true).optional(),
    description: z.literal(true).optional(),
    cityHQ: z.literal(true).optional(),
    address: z.literal(true).optional(),
    website: z.literal(true).optional(),
    facebookLink: z.literal(true).optional(),
    googleMapsLink: z.literal(true).optional(),
    twitterLink: z.literal(true).optional(),
    instagramLink: z.literal(true).optional(),
    latitude: z.literal(true).optional(),
    longitude: z.literal(true).optional(),
  })
  .strict();

export const InstitutionMaxAggregateInputObjectSchema = Schema;

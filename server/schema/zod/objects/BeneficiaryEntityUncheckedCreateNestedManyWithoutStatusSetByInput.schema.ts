/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityCreateWithoutStatusSetByInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutStatusSetByInput.schema';
import { BeneficiaryEntityCreateOrConnectWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityCreateOrConnectWithoutStatusSetByInput.schema';
import { BeneficiaryEntityCreateManyStatusSetByInputEnvelopeObjectSchema } from './BeneficiaryEntityCreateManyStatusSetByInputEnvelope.schema';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUncheckedCreateNestedManyWithoutStatusSetByInput>;
export const BeneficiaryEntityUncheckedCreateNestedManyWithoutStatusSetByInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryEntityCreateWithoutStatusSetByInputObjectSchema),
                z.lazy(() => BeneficiaryEntityCreateWithoutStatusSetByInputObjectSchema).array(),
                z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutStatusSetByInputObjectSchema),
                z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutStatusSetByInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BeneficiaryEntityCreateOrConnectWithoutStatusSetByInputObjectSchema),
                z.lazy(() => BeneficiaryEntityCreateOrConnectWithoutStatusSetByInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => BeneficiaryEntityCreateManyStatusSetByInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;

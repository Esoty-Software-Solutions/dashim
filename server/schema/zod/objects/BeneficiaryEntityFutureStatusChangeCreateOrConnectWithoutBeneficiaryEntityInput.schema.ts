/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutBeneficiaryEntityInput>;
export const BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutBeneficiaryEntityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInputObjectSchema),
            z.lazy(() => BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;

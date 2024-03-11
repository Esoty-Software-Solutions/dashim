/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeUpdateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryInput>;
export const BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;

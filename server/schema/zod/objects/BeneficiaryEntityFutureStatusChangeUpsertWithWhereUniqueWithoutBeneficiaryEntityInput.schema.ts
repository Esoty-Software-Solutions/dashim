/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType =
    z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryEntityInput>;
export const BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema: SchemaType =
    z
        .object({
            where: z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeUpdateWithoutBeneficiaryEntityInputObjectSchema),
                z.lazy(
                    () => BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema,
                ),
            ]),
            create: z.union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInputObjectSchema),
                z.lazy(
                    () => BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema,
                ),
            ]),
        })
        .strict() as SchemaType;

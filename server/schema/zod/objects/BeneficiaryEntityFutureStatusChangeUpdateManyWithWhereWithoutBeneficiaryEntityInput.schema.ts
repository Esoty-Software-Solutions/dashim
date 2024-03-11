/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeScalarWhereInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyMutationInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateManyMutationInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryEntityInput>;
export const BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryEntityInputObjectSchema: SchemaType =
    z
        .object({
            where: z.lazy(() => BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema),
            data: z.union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeUpdateManyMutationInputObjectSchema),
                z.lazy(
                    () =>
                        BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryEntityInputObjectSchema,
                ),
            ]),
        })
        .strict() as SchemaType;

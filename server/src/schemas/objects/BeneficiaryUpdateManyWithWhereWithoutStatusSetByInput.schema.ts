import { z } from 'zod';
import { BeneficiaryScalarWhereInputObjectSchema } from './BeneficiaryScalarWhereInput.schema';
import { BeneficiaryUpdateManyMutationInputObjectSchema } from './BeneficiaryUpdateManyMutationInput.schema';
import { BeneficiaryUncheckedUpdateManyWithoutBeneficiaryStatusChangesInputObjectSchema } from './BeneficiaryUncheckedUpdateManyWithoutBeneficiaryStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateManyWithWhereWithoutStatusSetByInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryUncheckedUpdateManyWithoutBeneficiaryStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryUpdateManyWithWhereWithoutStatusSetByInputObjectSchema =
  Schema;

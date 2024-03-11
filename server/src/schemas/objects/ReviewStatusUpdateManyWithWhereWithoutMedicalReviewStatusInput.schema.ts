import { z } from 'zod';
import { ReviewStatusScalarWhereInputObjectSchema } from './ReviewStatusScalarWhereInput.schema';
import { ReviewStatusUpdateManyMutationInputObjectSchema } from './ReviewStatusUpdateManyMutationInput.schema';
import { ReviewStatusUncheckedUpdateManyWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusUncheckedUpdateManyWithoutMedicalBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateManyWithWhereWithoutMedicalReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ReviewStatusUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ReviewStatusUncheckedUpdateManyWithoutMedicalBeneficiaryServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpdateManyWithWhereWithoutMedicalReviewStatusInputObjectSchema =
  Schema;

import { z } from 'zod';
import { CityCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema } from './CityCreateOrConnectWithoutBeneficiaryEntitiesInput.schema';
import { CityUpsertWithoutBeneficiaryEntitiesInputObjectSchema } from './CityUpsertWithoutBeneficiaryEntitiesInput.schema';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';
import { CityUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityUpdateWithoutBeneficiaryEntitiesInput.schema';
import { CityUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityUncheckedUpdateWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CityCreateWithoutBeneficiaryEntitiesInputObjectSchema),
          z.lazy(
            () =>
              CityUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => CityCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => CityUpsertWithoutBeneficiaryEntitiesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CityWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CityUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
          z.lazy(
            () =>
              CityUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const CityUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInputObjectSchema =
  Schema;

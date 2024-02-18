import { z } from 'zod';
import { CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUpsertWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUpsertWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUpdateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema,
          ),
          z.lazy(
            () =>
              CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => CityEnumUpsertWithoutBeneficiaryEntitiesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CityEnumWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => CityEnumUpdateWithoutBeneficiaryEntitiesInputObjectSchema,
          ),
          z.lazy(
            () =>
              CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const CityEnumUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInputObjectSchema =
  Schema;

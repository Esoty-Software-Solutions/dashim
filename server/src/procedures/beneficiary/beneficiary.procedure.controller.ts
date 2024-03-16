import { z } from "zod";
import { unGuardedPrisma } from "@config/db";
import { Prisma } from "@prisma/client";
import {
  DEFAULT_MAX_RETRIES,
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_NUMBER,
} from "@procedures/_config";
import {
  ListBeneficiaryEntityInputSchema,
  CreateBeneficiaryEntityInputSchema,
  UpdateBeneficiaryEntityInputSchema,
  CreateBeneficiaryInputSchema,
} from "./beneficiary.procedure.schema";
import { rules } from "./beneficiary.procedure.rule";
import { actions } from "./beneficiary.procedure.action";

import { FAKE_USER_ID } from "@utilities/auth";

export async function createBeneficiaryEntity(
  userId: string = FAKE_USER_ID,
  input: Prisma.BeneficiaryEntityCreateArgs,
) {
  // input data validation
  //TODO: add validation
  const validInput = input;
  // business rules
  //TODO: add business rules
  // business logic
  const processedInput = actions.processBeneficiaryEntryCreate(
    validInput,
    userId,
  );

  return await unGuardedPrisma.beneficiaryEntity.create(processedInput);
}

export async function createBeneficiary(
  userId: string = FAKE_USER_ID,
  input: Prisma.BeneficiaryCreateArgs,
) {
  // input data validation
  //TODO: add validation
  const validInput = input;
  // business rules
  //TODO: add business rules
  // business logic
  const processedInput = actions.processBeneficiaryCreate(validInput, userId);

  const result = await unGuardedPrisma.beneficiary.create(processedInput);
  return result;
}

export async function updateBeneficiaryEntity(
  userId: string = FAKE_USER_ID,
  input: Prisma.BeneficiaryEntityUpdateArgs,
) {
  // input data validation
  //TODO: add validation
  const validInput = input;
  // business rules
  //TODO: add business rules
  // business logic
  const processedInput = validInput;

  return await unGuardedPrisma.beneficiaryEntity.update(processedInput);
}

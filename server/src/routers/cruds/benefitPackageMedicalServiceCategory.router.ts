import { Router, json } from "express";
import { BenefitPackageMedicalServiceCategory } from "@models/benefitPackageMedicalServiceCategory.model";
import { unGuardedPrisma } from "@config/db";

export const benefitPackageMedicalServiceCategoryRouter = Router();

benefitPackageMedicalServiceCategoryRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
benefitPackageMedicalServiceCategoryRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.aggregate(input));
});
benefitPackageMedicalServiceCategoryRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.findFirst(input));
});
benefitPackageMedicalServiceCategoryRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.findMany(input));
});
benefitPackageMedicalServiceCategoryRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.benefitPackageMedicalServiceCategory.findMany(input),
    unGuardedPrisma.benefitPackageMedicalServiceCategory.count({ where: input?.where }),
    unGuardedPrisma.benefitPackageMedicalServiceCategory.count(),
  ]);
  const statistics: {
    key: string;
    value: string | number | boolean;
  }[] = [];
  res.json({
    data,
    filteredCount,
    unFilteredCount,
    statistics,
  });
});
benefitPackageMedicalServiceCategoryRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.findUnique(input));
});
benefitPackageMedicalServiceCategoryRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.findUniqueOrThrow(input));
});
benefitPackageMedicalServiceCategoryRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.groupBy(input));
});
benefitPackageMedicalServiceCategoryRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.count(input));
});
benefitPackageMedicalServiceCategoryRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.createMany(input));
});
benefitPackageMedicalServiceCategoryRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.create(input));
});
benefitPackageMedicalServiceCategoryRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.deleteMany(input));
});
benefitPackageMedicalServiceCategoryRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.delete(input));
});
benefitPackageMedicalServiceCategoryRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.updateMany(input));
});
benefitPackageMedicalServiceCategoryRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.update(input));
});
benefitPackageMedicalServiceCategoryRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackageMedicalServiceCategory.upsert(input));
});

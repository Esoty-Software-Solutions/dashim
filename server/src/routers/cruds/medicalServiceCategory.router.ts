import { Router, json } from "express";
import { MedicalServiceCategory } from "@models/medicalServiceCategory.model";
import { unGuardedPrisma } from "@config/db";

export const medicalServiceCategoryRouter = Router();

medicalServiceCategoryRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
medicalServiceCategoryRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalServiceCategory.aggregate(input));
});
medicalServiceCategoryRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalServiceCategory.findFirst(input));
});
medicalServiceCategoryRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalServiceCategory.findMany(input));
});
medicalServiceCategoryRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.medicalServiceCategory.findMany(input),
    unGuardedPrisma.medicalServiceCategory.count({ where: input?.where }),
    unGuardedPrisma.medicalServiceCategory.count(),
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
medicalServiceCategoryRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalServiceCategory.findUnique(input));
});
medicalServiceCategoryRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalServiceCategory.findUniqueOrThrow(input));
});
medicalServiceCategoryRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalServiceCategory.groupBy(input));
});
medicalServiceCategoryRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.medicalServiceCategory.count(input));
});
medicalServiceCategoryRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalServiceCategory.createMany(input));
});
medicalServiceCategoryRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalServiceCategory.create(input));
});
medicalServiceCategoryRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalServiceCategory.deleteMany(input));
});
medicalServiceCategoryRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalServiceCategory.delete(input));
});
medicalServiceCategoryRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalServiceCategory.updateMany(input));
});
medicalServiceCategoryRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalServiceCategory.update(input));
});
medicalServiceCategoryRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.medicalServiceCategory.upsert(input));
});

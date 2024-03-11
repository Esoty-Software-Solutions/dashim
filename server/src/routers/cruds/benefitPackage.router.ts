import { Router, json } from "express";
import { BenefitPackage } from "@models/benefitPackage.model";
import { unGuardedPrisma } from "@config/db";

export const benefitPackageRouter = Router();

benefitPackageRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
benefitPackageRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackage.aggregate(input));
});
benefitPackageRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackage.findFirst(input));
});
benefitPackageRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackage.findMany(input));
});
benefitPackageRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.benefitPackage.findMany(input),
    unGuardedPrisma.benefitPackage.count({ where: input?.where }),
    unGuardedPrisma.benefitPackage.count(),
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
benefitPackageRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackage.findUnique(input));
});
benefitPackageRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackage.findUniqueOrThrow(input));
});
benefitPackageRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackage.groupBy(input));
});
benefitPackageRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.benefitPackage.count(input));
});
benefitPackageRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackage.createMany(input));
});
benefitPackageRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackage.create(input));
});
benefitPackageRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackage.deleteMany(input));
});
benefitPackageRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackage.delete(input));
});
benefitPackageRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackage.updateMany(input));
});
benefitPackageRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackage.update(input));
});
benefitPackageRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.benefitPackage.upsert(input));
});

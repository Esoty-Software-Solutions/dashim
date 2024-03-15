import { Router, json } from "express";
import { BeneficiaryService } from "@models/beneficiaryService.model";
import { unGuardedPrisma } from "@config/db";

export const beneficiaryServiceRouter = Router();

beneficiaryServiceRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
beneficiaryServiceRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryService.aggregate(input));
});
beneficiaryServiceRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryService.findFirst(input));
});
beneficiaryServiceRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryService.findMany(input));
});
beneficiaryServiceRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.beneficiaryService.findMany(input),
    unGuardedPrisma.beneficiaryService.count({ where: input?.where }),
    unGuardedPrisma.beneficiaryService.count(),
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
beneficiaryServiceRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryService.findUnique(input));
});
beneficiaryServiceRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryService.findUniqueOrThrow(input));
});
beneficiaryServiceRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryService.groupBy(input));
});
beneficiaryServiceRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryService.count(input));
});
beneficiaryServiceRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryService.createMany(input));
});
beneficiaryServiceRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryService.create(input));
});
beneficiaryServiceRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryService.deleteMany(input));
});
beneficiaryServiceRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryService.delete(input));
});
beneficiaryServiceRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryService.updateMany(input));
});
beneficiaryServiceRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryService.update(input));
});
beneficiaryServiceRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryService.upsert(input));
});

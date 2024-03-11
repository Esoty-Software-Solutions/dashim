import { Router, json } from "express";
import { InstitutionMedicalService } from "@models/institutionMedicalService.model";
import { unGuardedPrisma } from "@config/db";

export const institutionMedicalServiceRouter = Router();

institutionMedicalServiceRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
institutionMedicalServiceRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.institutionMedicalService.aggregate(input));
});
institutionMedicalServiceRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.institutionMedicalService.findFirst(input));
});
institutionMedicalServiceRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.institutionMedicalService.findMany(input));
});
institutionMedicalServiceRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.institutionMedicalService.findMany(input),
    unGuardedPrisma.institutionMedicalService.count({ where: input?.where }),
    unGuardedPrisma.institutionMedicalService.count(),
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
institutionMedicalServiceRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.institutionMedicalService.findUnique(input));
});
institutionMedicalServiceRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.institutionMedicalService.findUniqueOrThrow(input));
});
institutionMedicalServiceRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.institutionMedicalService.groupBy(input));
});
institutionMedicalServiceRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.institutionMedicalService.count(input));
});
institutionMedicalServiceRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.institutionMedicalService.createMany(input));
});
institutionMedicalServiceRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.institutionMedicalService.create(input));
});
institutionMedicalServiceRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.institutionMedicalService.deleteMany(input));
});
institutionMedicalServiceRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.institutionMedicalService.delete(input));
});
institutionMedicalServiceRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.institutionMedicalService.updateMany(input));
});
institutionMedicalServiceRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.institutionMedicalService.update(input));
});
institutionMedicalServiceRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.institutionMedicalService.upsert(input));
});

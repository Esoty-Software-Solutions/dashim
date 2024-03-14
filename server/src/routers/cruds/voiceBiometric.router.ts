import { Router, json } from "express";
import { VoiceBiometric } from "@models/voiceBiometric.model";
import { unGuardedPrisma } from "@config/db";

export const voiceBiometricRouter = Router();

voiceBiometricRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
voiceBiometricRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.voiceBiometric.aggregate(input));
});
voiceBiometricRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.voiceBiometric.findFirst(input));
});
voiceBiometricRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.voiceBiometric.findMany(input));
});
voiceBiometricRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.voiceBiometric.findMany(input),
    unGuardedPrisma.voiceBiometric.count({ where: input?.where }),
    unGuardedPrisma.voiceBiometric.count(),
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
voiceBiometricRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.voiceBiometric.findUnique(input));
});
voiceBiometricRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.voiceBiometric.findUniqueOrThrow(input));
});
voiceBiometricRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.voiceBiometric.groupBy(input));
});
voiceBiometricRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.voiceBiometric.count(input));
});
voiceBiometricRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.voiceBiometric.createMany(input));
});
voiceBiometricRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.voiceBiometric.create(input));
});
voiceBiometricRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.voiceBiometric.deleteMany(input));
});
voiceBiometricRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.voiceBiometric.delete(input));
});
voiceBiometricRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.voiceBiometric.updateMany(input));
});
voiceBiometricRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.voiceBiometric.update(input));
});
voiceBiometricRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.voiceBiometric.upsert(input));
});

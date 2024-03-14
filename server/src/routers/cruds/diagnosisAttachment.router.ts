import { Router, json } from "express";
import { DiagnosisAttachment } from "@models/diagnosisAttachment.model";
import { unGuardedPrisma } from "@config/db";

export const diagnosisAttachmentRouter = Router();

diagnosisAttachmentRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
diagnosisAttachmentRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.diagnosisAttachment.aggregate(input));
});
diagnosisAttachmentRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.diagnosisAttachment.findFirst(input));
});
diagnosisAttachmentRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.diagnosisAttachment.findMany(input));
});
diagnosisAttachmentRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.diagnosisAttachment.findMany(input),
    unGuardedPrisma.diagnosisAttachment.count({ where: input?.where }),
    unGuardedPrisma.diagnosisAttachment.count(),
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
diagnosisAttachmentRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.diagnosisAttachment.findUnique(input));
});
diagnosisAttachmentRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.diagnosisAttachment.findUniqueOrThrow(input));
});
diagnosisAttachmentRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.diagnosisAttachment.groupBy(input));
});
diagnosisAttachmentRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.diagnosisAttachment.count(input));
});
diagnosisAttachmentRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.diagnosisAttachment.createMany(input));
});
diagnosisAttachmentRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.diagnosisAttachment.create(input));
});
diagnosisAttachmentRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.diagnosisAttachment.deleteMany(input));
});
diagnosisAttachmentRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.diagnosisAttachment.delete(input));
});
diagnosisAttachmentRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.diagnosisAttachment.updateMany(input));
});
diagnosisAttachmentRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.diagnosisAttachment.update(input));
});
diagnosisAttachmentRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.diagnosisAttachment.upsert(input));
});

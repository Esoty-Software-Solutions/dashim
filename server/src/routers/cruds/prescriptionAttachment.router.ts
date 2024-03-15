import { Router, json } from "express";
import { PrescriptionAttachment } from "@models/prescriptionAttachment.model";
import { unGuardedPrisma } from "@config/db";

export const prescriptionAttachmentRouter = Router();

prescriptionAttachmentRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
prescriptionAttachmentRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.prescriptionAttachment.aggregate(input));
});
prescriptionAttachmentRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.prescriptionAttachment.findFirst(input));
});
prescriptionAttachmentRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.prescriptionAttachment.findMany(input));
});
prescriptionAttachmentRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.prescriptionAttachment.findMany(input),
    unGuardedPrisma.prescriptionAttachment.count({ where: input?.where }),
    unGuardedPrisma.prescriptionAttachment.count(),
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
prescriptionAttachmentRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.prescriptionAttachment.findUnique(input));
});
prescriptionAttachmentRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.prescriptionAttachment.findUniqueOrThrow(input));
});
prescriptionAttachmentRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.prescriptionAttachment.groupBy(input));
});
prescriptionAttachmentRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.prescriptionAttachment.count(input));
});
prescriptionAttachmentRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.prescriptionAttachment.createMany(input));
});
prescriptionAttachmentRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.prescriptionAttachment.create(input));
});
prescriptionAttachmentRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.prescriptionAttachment.deleteMany(input));
});
prescriptionAttachmentRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.prescriptionAttachment.delete(input));
});
prescriptionAttachmentRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.prescriptionAttachment.updateMany(input));
});
prescriptionAttachmentRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.prescriptionAttachment.update(input));
});
prescriptionAttachmentRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.prescriptionAttachment.upsert(input));
});

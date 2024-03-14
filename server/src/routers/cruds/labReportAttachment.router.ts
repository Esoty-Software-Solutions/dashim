import { Router, json } from "express";
import { LabReportAttachment } from "@models/labReportAttachment.model";
import { unGuardedPrisma } from "@config/db";

export const labReportAttachmentRouter = Router();

labReportAttachmentRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
labReportAttachmentRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.labReportAttachment.aggregate(input));
});
labReportAttachmentRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.labReportAttachment.findFirst(input));
});
labReportAttachmentRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.labReportAttachment.findMany(input));
});
labReportAttachmentRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.labReportAttachment.findMany(input),
    unGuardedPrisma.labReportAttachment.count({ where: input?.where }),
    unGuardedPrisma.labReportAttachment.count(),
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
labReportAttachmentRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.labReportAttachment.findUnique(input));
});
labReportAttachmentRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.labReportAttachment.findUniqueOrThrow(input));
});
labReportAttachmentRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.labReportAttachment.groupBy(input));
});
labReportAttachmentRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.labReportAttachment.count(input));
});
labReportAttachmentRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.labReportAttachment.createMany(input));
});
labReportAttachmentRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.labReportAttachment.create(input));
});
labReportAttachmentRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.labReportAttachment.deleteMany(input));
});
labReportAttachmentRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.labReportAttachment.delete(input));
});
labReportAttachmentRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.labReportAttachment.updateMany(input));
});
labReportAttachmentRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.labReportAttachment.update(input));
});
labReportAttachmentRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.labReportAttachment.upsert(input));
});

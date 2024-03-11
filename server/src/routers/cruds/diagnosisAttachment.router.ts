import { Router, json } from "express";
import { DiagnosisAttachment } from "@models/diagnosisAttachment.model";

export const diagnosisAttachmentRouter = Router();

diagnosisAttachmentRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
diagnosisAttachmentRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DiagnosisAttachment.aggregate(req, input, { bypassMiddleware: true }));
});
diagnosisAttachmentRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DiagnosisAttachment.findFirst(req, input, { bypassMiddleware: true }));
});
diagnosisAttachmentRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DiagnosisAttachment.findMany(req, input, { bypassMiddleware: true }));
});
diagnosisAttachmentRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    DiagnosisAttachment.findMany(req, input),
    DiagnosisAttachment.count(req, { where: input?.where }),
    DiagnosisAttachment.count(req),
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
  const input = JSON.parse(req.query.q as string);
  res.json(await DiagnosisAttachment.findUnique(req, input, { bypassMiddleware: true }));
});
diagnosisAttachmentRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await DiagnosisAttachment.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
diagnosisAttachmentRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DiagnosisAttachment.groupBy(req, input, { bypassMiddleware: true }));
});
diagnosisAttachmentRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DiagnosisAttachment.count(req, input, { bypassMiddleware: true }));
});
diagnosisAttachmentRouter.post("/createMany", async (req, res) => {
  res.json(await DiagnosisAttachment.createMany(req, req.body, { bypassMiddleware: true }));
});
diagnosisAttachmentRouter.post("/createOne", async (req, res) => {
  res.json(await DiagnosisAttachment.createOne(req, req.body, { bypassMiddleware: true }));
});
diagnosisAttachmentRouter.post("/deleteMany", async (req, res) => {
  res.json(await DiagnosisAttachment.deleteMany(req, req.body, { bypassMiddleware: true }));
});
diagnosisAttachmentRouter.post("/deleteOne", async (req, res) => {
  res.json(await DiagnosisAttachment.deleteOne(req, req.body, { bypassMiddleware: true }));
});
diagnosisAttachmentRouter.post("/updateMany", async (req, res) => {
  res.json(await DiagnosisAttachment.updateMany(req, req.body, { bypassMiddleware: true }));
});
diagnosisAttachmentRouter.post("/updateOne", async (req, res) => {
  res.json(await DiagnosisAttachment.updateOne(req, req.body, { bypassMiddleware: true }));
});
diagnosisAttachmentRouter.post("/upsert", async (req, res) => {
  res.json(await DiagnosisAttachment.upsert(req, req.body, { bypassMiddleware: true }));
});

import { Router, json } from "express";
import { PrescriptionAttachment } from "@models/prescriptionAttachment.model";

export const prescriptionAttachmentRouter = Router();

prescriptionAttachmentRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
prescriptionAttachmentRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await PrescriptionAttachment.aggregate(req, input, { bypassMiddleware: true }));
});
prescriptionAttachmentRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await PrescriptionAttachment.findFirst(req, input, { bypassMiddleware: true }));
});
prescriptionAttachmentRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await PrescriptionAttachment.findMany(req, input, { bypassMiddleware: true }));
});
prescriptionAttachmentRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    PrescriptionAttachment.findMany(req, input),
    PrescriptionAttachment.count(req, { where: input?.where }),
    PrescriptionAttachment.count(req),
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
  const input = JSON.parse(req.query.q as string);
  res.json(await PrescriptionAttachment.findUnique(req, input, { bypassMiddleware: true }));
});
prescriptionAttachmentRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await PrescriptionAttachment.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
prescriptionAttachmentRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await PrescriptionAttachment.groupBy(req, input, { bypassMiddleware: true }));
});
prescriptionAttachmentRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await PrescriptionAttachment.count(req, input, { bypassMiddleware: true }));
});
prescriptionAttachmentRouter.post("/createMany", async (req, res) => {
  res.json(await PrescriptionAttachment.createMany(req, req.body, { bypassMiddleware: true }));
});
prescriptionAttachmentRouter.post("/createOne", async (req, res) => {
  res.json(await PrescriptionAttachment.createOne(req, req.body, { bypassMiddleware: true }));
});
prescriptionAttachmentRouter.post("/deleteMany", async (req, res) => {
  res.json(await PrescriptionAttachment.deleteMany(req, req.body, { bypassMiddleware: true }));
});
prescriptionAttachmentRouter.post("/deleteOne", async (req, res) => {
  res.json(await PrescriptionAttachment.deleteOne(req, req.body, { bypassMiddleware: true }));
});
prescriptionAttachmentRouter.post("/updateMany", async (req, res) => {
  res.json(await PrescriptionAttachment.updateMany(req, req.body, { bypassMiddleware: true }));
});
prescriptionAttachmentRouter.post("/updateOne", async (req, res) => {
  res.json(await PrescriptionAttachment.updateOne(req, req.body, { bypassMiddleware: true }));
});
prescriptionAttachmentRouter.post("/upsert", async (req, res) => {
  res.json(await PrescriptionAttachment.upsert(req, req.body, { bypassMiddleware: true }));
});

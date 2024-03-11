import { Router, json } from "express";
import { LabReportAttachment } from "@models/labReportAttachment.model";

export const labReportAttachmentRouter = Router();

labReportAttachmentRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
labReportAttachmentRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await LabReportAttachment.aggregate(req, input, { bypassMiddleware: true }));
});
labReportAttachmentRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await LabReportAttachment.findFirst(req, input, { bypassMiddleware: true }));
});
labReportAttachmentRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await LabReportAttachment.findMany(req, input, { bypassMiddleware: true }));
});
labReportAttachmentRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    LabReportAttachment.findMany(req, input),
    LabReportAttachment.count(req, { where: input?.where }),
    LabReportAttachment.count(req),
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
  const input = JSON.parse(req.query.q as string);
  res.json(await LabReportAttachment.findUnique(req, input, { bypassMiddleware: true }));
});
labReportAttachmentRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await LabReportAttachment.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
labReportAttachmentRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await LabReportAttachment.groupBy(req, input, { bypassMiddleware: true }));
});
labReportAttachmentRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await LabReportAttachment.count(req, input, { bypassMiddleware: true }));
});
labReportAttachmentRouter.post("/createMany", async (req, res) => {
  res.json(await LabReportAttachment.createMany(req, req.body, { bypassMiddleware: true }));
});
labReportAttachmentRouter.post("/createOne", async (req, res) => {
  res.json(await LabReportAttachment.createOne(req, req.body, { bypassMiddleware: true }));
});
labReportAttachmentRouter.post("/deleteMany", async (req, res) => {
  res.json(await LabReportAttachment.deleteMany(req, req.body, { bypassMiddleware: true }));
});
labReportAttachmentRouter.post("/deleteOne", async (req, res) => {
  res.json(await LabReportAttachment.deleteOne(req, req.body, { bypassMiddleware: true }));
});
labReportAttachmentRouter.post("/updateMany", async (req, res) => {
  res.json(await LabReportAttachment.updateMany(req, req.body, { bypassMiddleware: true }));
});
labReportAttachmentRouter.post("/updateOne", async (req, res) => {
  res.json(await LabReportAttachment.updateOne(req, req.body, { bypassMiddleware: true }));
});
labReportAttachmentRouter.post("/upsert", async (req, res) => {
  res.json(await LabReportAttachment.upsert(req, req.body, { bypassMiddleware: true }));
});

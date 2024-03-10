const { Job } = require("../models/index");
const triesNumber = 3;
module.exports = {
  addJob: async (name, data) => {
    const jobContent = {
      name,
      data,
    };
    const content = JSON.stringify(jobContent);
    try {
      const job = await Job.create({
        name,
        content,
      });
      return job;
    } catch (error) {
      return false;
    }
  },
  removeJob: async (id) => {
    try {
      const status = await Job.destroy({ where: { id } });
      return status;
    } catch (error) {
      return false;
    }
  },
  execute: async function () {
    const [firstJob] = await Job.findAll({
      order: [["id", "asc"]],
      limit: 1,
    });
    if (firstJob) {
      const jobName = firstJob.name;
      const { data } = JSON.parse(firstJob.content);
      try {
        const handle = require(process.cwd() + "/jobs/" + jobName + ".js");
        await handle(data);
        await firstJob.destroy();
        console.log(">>> Success");
      } catch (error) {
        if (firstJob.time < triesNumber) {
          console.log(">>> Fail");
          await firstJob.update({ time: firstJob.time + 1 });
          this.execute();
        } else {
          await firstJob.destroy();
          console.log(">>> Success");
        }
      }
    }
  },
};

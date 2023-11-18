import React, { useEffect, useRef } from "react";
import HistoryTable from "./HistoryTable";
import { useDispatch, useSelector } from "react-redux";
import { updateHistories } from "../../Redux/Redux-actions/HistoryActions";

const History = () => {
  const histories = useSelector((state) => state.history.histories);
  const status = useSelector((state) => state.inputNumber.status);
  const maxTime = useSelector((state) => state.counter.maxTime);
  const historyRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    if (status == 0) {
      dispatch(updateHistories(maxTime));
    }
  }, [status]);
  useEffect(() => {
    if (histories.length) {
      historyRef.current.scrollLeft =
        (historyRef.current.childElementCount - 1) *
        historyRef.current.clientWidth;
    }
  }, [histories]);
  return (
    <>
      {histories.length ? (
        <div className="flex w-full overflow-x-scroll mt-5" ref={historyRef}>
          {histories.map(({ maxTime, times }, index) => (
            <HistoryTable
              key={index}
              maxTime={maxTime}
              times={times}
              index={`${index + 1} / ${histories.length}`}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default History;

import { formatDate } from "@/utils";
import { portfolioItemCardStyles } from "@/styles/components";
import React from "react";

export type DateRangeProps = {
  start: string;
  end: string | undefined;
};

function DateRange({ start, end }: DateRangeProps) {
  const startDateFormat = formatDate(start);
  const completedDateFormat = end ? formatDate(end) : "Present";

  return (
    <p className={portfolioItemCardStyles.generalText}>
      {startDateFormat} - {completedDateFormat}
    </p>
  );
}

export default React.memo(DateRange);

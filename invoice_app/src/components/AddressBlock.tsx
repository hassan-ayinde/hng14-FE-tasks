import React from "react";

const AddressBlock = ({ streetName, streetCity, streetCountry, streetPostalCode }: { streetName: string; streetCity: string; streetCountry: string; streetPostalCode: string }) => {
  return (
    <div className="flex flex-col gap-1 text-xs text-neutral-400">
      <p>
        {streetName}
      </p>
      <p>
        {streetCity}
      </p>
      <p>
        {streetPostalCode}
      </p>
      <p>
        {streetCountry}
      </p>
    </div>
  );
};

export default AddressBlock;

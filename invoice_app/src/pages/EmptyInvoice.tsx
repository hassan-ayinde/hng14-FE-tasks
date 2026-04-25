import AppLayout from "@/components/layouts/AppLayout";
import MainHeader from "@/components/layouts/MainHeader";
import CAMPAIGNSVG from "@/assets/images/campaign_Flatline.svg";
import AppBar from "@/components/layouts/AppBar";

const EmptyInvoice = () => {
  return (
    <AppLayout>
      <section className="flex ">
        <div className="hidden lg:block">
          <AppBar />
        </div>
        <div className="w-full">
          <MainHeader />
          <section className="w-full h-125 overflow-hidden flex flex-col items-center justify-center gap-5">
            <img src={CAMPAIGNSVG} alt="Campaign" />
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold">There is nothing here</h2>
              <p className="text-sm text-gray-500">
                Create an invoice by clicking the <br />
                <span className="font-bold capitalize">new</span> invoice button
                and get started
              </p>
            </div>
          </section>
        </div>
      </section>
    </AppLayout>
  );
};

export default EmptyInvoice;

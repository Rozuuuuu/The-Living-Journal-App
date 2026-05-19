
import BrainDump from '../components/BrainDump';
import ActiveAgent from '../components/ActiveAgent';
import Inbox from '../components/Inbox';

export default function BrainDumpPage() {
  return (
    <div className="max-w-container-max mx-auto px-gutter md:px-xxl py-xl md:py-xxl w-full">
      {/* Brain Dump Input Area */}
      <BrainDump />

      {/* Layout Grid for Active Agent and Inbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        {/* Active Agent Column */}
        <ActiveAgent />

        {/* Inbox Column */}
        <Inbox />
      </div>
    </div>
  );
}

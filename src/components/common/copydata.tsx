import { Tooltip } from "@mui/material";
import { useState } from "react";

type CopyTextProps = {
    value: string | null | undefined;
    showPhone?: boolean;
    showEmail?: boolean;
};

const CopyText = ({
    value,
    showPhone = false,
    showEmail = false,
}: CopyTextProps) => {
    const [copied, setCopied] = useState(false);

    if (!value) return null;

    const isEmail =
        showEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const isPhone =
        showPhone && /^[+]?[\d\s\-()]{7,20}$/.test(value);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    return (
        <span className="copyicon">
            {/* Email */}
            {isEmail && (
                <Tooltip title="Send Email" placement="top" arrow>
                    <a
                        href={`mailto:${value}`}
                        style={{ color: "var(--vz-primary)" }}
                    >
                        <i
                            className="ri-mail-line"
                            style={{ fontSize: 18 }}
                        />
                    </a>
                </Tooltip>
            )}

            {/* Phone */}
            {isPhone && (
                <Tooltip title="Call" placement="top" arrow>
                    <a
                        href={`tel:${value.replace(/\s+/g, "")}`}
                        style={{ color: "var(--vz-primary)" }}
                    >
                        <i
                            className="ri-phone-line"
                            style={{ fontSize: 18 }}
                        />
                    </a>
                </Tooltip>
            )}

            {/* Copy */}
            <Tooltip
                title={copied ? "Copied!" : "Copy"}
                placement="top"
                arrow
            >
                <span
                    onClick={handleCopy}
                    className="cursor-pointer"
                >
                    <i
                        className={
                            copied
                                ? "ri-check-line"
                                : "ri-file-copy-line"
                        }

                    />
                </span>
            </Tooltip>
        </span>
    );
};

export default CopyText;
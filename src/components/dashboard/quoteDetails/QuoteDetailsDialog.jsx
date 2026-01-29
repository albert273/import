"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Button,
  Stack,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { finishQuote } from "@/redux/slice/quotes";

export default function QuoteDetailsDialog({ open, onClose, quote }) {
  const dispatch = useDispatch();

  if (!quote) return null;

  // ✅ schema-correct finished status
  const finishedStatus = Array.isArray(quote.status)
    ? quote.status.find((s) => s.isFinished)
    : null;

  const handleFinishQuote = () => {
    dispatch(finishQuote(quote._id));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: "bold", color: "#03045E" }}>
        Quote Details
      </DialogTitle>

      <DialogContent>
        <Box sx={{ mt: 1 }}>
          <List>

            <ListItem>
              <ListItemText primary="Name" secondary={quote.name} />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText primary="Email" secondary={quote.email} />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText primary="Phone Number" secondary={quote.phoneNumber} />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText primary="Trip Type" secondary={quote.tripType} />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText primary="Width" secondary={quote.width} />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText primary="Length" secondary={quote.lenght} />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText primary="Weight" secondary={quote.weight} />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText
                primary="Additional Details"
                secondary={quote.additionalDetails || "N/A"}
              />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText
                primary="Created At"
                secondary={new Date(quote.createdAt).toLocaleString()}
              />
            </ListItem>

            {/* ✅ STATUS */}
            <Divider />
            <ListItem>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: "100%" }}
              >
                <ListItemText
                  primary="Status"
                  secondary={
                    finishedStatus
                      ? `Finished on ${new Date(
                          finishedStatus.finishedAt
                        ).toLocaleDateString()}`
                      : "In progress"
                  }
                />

                {!finishedStatus && (
                  <Button
                    onClick={handleFinishQuote}
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#03045E",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#00229dff" },
                    }}
                  >
                    Finish Quote
                  </Button>
                )}
              </Stack>
            </ListItem>

          </List>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
